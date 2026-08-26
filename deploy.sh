npx nuxt generate
aws s3 cp dist s3://dogcompanydtx.com --recursive --profile personal
aws cloudfront create-invalidation --distribution-id E3P2U9X17YUZYB --paths '/*' --profile=personal
