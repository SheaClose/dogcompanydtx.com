npx nuxt generate
aws s3 cp dist s3://dogcompanydtx.com --recursive --profile=personal
aws cloudfront create-invalidation --distribution-id E2B7WPT6QD9GGR --paths '/*' --profile=personal
