# GitHub Actions Deployment Workflow

This workflow automatically deploys the OnlyCampus landing page to AWS S3 and invalidates CloudFront cache when changes are pushed to the `develop` branch.

## Setup Instructions

### 1. Configure GitHub Secrets

Go to your repository settings → Secrets and variables → Actions, and add the following secrets:

- **`AWS_ROLE_ARN`**: `arn:aws:iam::654404853357:role/onlycampus-website-github-actions-role`
- **`S3_BUCKET_NAME`**: `onlycampus-website`
- **`CLOUDFRONT_DISTRIBUTION_ID`**: Get this from Terraform output: `terraform output cloudfront_distribution_id`

### 2. Terraform Outputs

The following values are used in this deployment:

- **GitHub Actions Role ARN**: `arn:aws:iam::654404853357:role/onlycampus-website-github-actions-role`
- **GitHub Actions Role Name**: `onlycampus-website-github-actions-role`
- **Route53 Zone ID**: `Z00354391Y7WCL0AGY8HK`
- **Route53 Zone Name**: `solarityai.com`
- **S3 Bucket ARN**: `arn:aws:s3:::onlycampus-website`
- **S3 Bucket Domain**: `onlycampus-website.s3.us-east-1.amazonaws.com`
- **S3 Bucket ID**: `onlycampus-website`
- **Website URL**: `https://onlycampus.solarityai.com`

### 3. How It Works

1. **Trigger**: The workflow runs automatically on pushes to `develop` branch or can be manually triggered
2. **Authentication**: Uses OIDC (OpenID Connect) to authenticate with AWS using the GitHub Actions role
3. **Deployment**: 
   - Uploads static assets (CSS, JS, images, fonts) with long cache headers (1 year)
   - Uploads HTML files and metadata with shorter cache headers (1 hour)
4. **Cache Invalidation**: Creates a CloudFront invalidation to ensure changes are visible immediately

### 4. Manual Deployment

You can manually trigger the workflow:
1. Go to Actions tab in GitHub
2. Select "Deploy Static Website to AWS"
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

### 5. Monitoring

- Check the Actions tab to see deployment status
- View CloudWatch logs if there are any issues
- The deployment summary shows all details after completion

## Troubleshooting

### Common Issues

1. **Authentication Failed**: Ensure the GitHub Actions role has the correct trust policy
2. **S3 Upload Failed**: Check that the role has `s3:PutObject` and `s3:DeleteObject` permissions
3. **CloudFront Invalidation Failed**: Verify the distribution ID is correct and the role has `cloudfront:CreateInvalidation` permission

### Getting Terraform Outputs

If you need to get the CloudFront distribution ID:

```bash
cd terraform/static-websites/onlycampus
terraform output cloudfront_distribution_id
```
