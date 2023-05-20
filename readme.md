
### Live 

[niko-skoularikis.link](niko-skoularikis.link)

### cache invalidation

Clear the cloudfront cache every time you make changes to your s3 bucket.   

aws cloudfront create-invalidation --distribution-id #{distribution_id} --paths "/*
https://stackoverflow.com/questions/65286352/invalidate-cloudfront-cache-with-aws-cdk-pipelines


### HTTPS static site cached over cloudfront.

Here are the steps to host your site with an ssl certificate over https and through a cloudfront CDN.

### Create an S3 bucket.

1) Turn off "Block all public access"
2) If you would like to use s3 for static website hosting and purchasing your own domain, include the top-level 
domain name in the name.  Example: my-site.com.  
3) Click create.  Under the properties tab, scroll to tthe bottom and enable static website hosting.  Enter the entry point for the app.  Ex.  index.html
4) In the permissions tab, give access for your resource to the following actions.

```yml
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::#{s3bucketname}"
        },
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:GetObjectAcl",
                "s3:DeleteObject",
                "s3:ListMultipartUploadParts",
                "s3:AbortMultipartUpload"
            ],
            "Resource": "arn:aws:s3:::#{s3bucketname}*"
        }
    ]
}
```

### Request an ssl cert from AWS 

1) Request an ssl cert for your domain name.  You can include www.my-site.com and my-site.com 

### Cloudfront 

1) Cache your static site over a cloudfront distribution.  
2) Select your ssl cert.
3) Enter your default root object (index.html); 
4) Add any custom CNAMEs 

### Route 53 

1) Purchase a domain name and add a hosted zone for it.  Ex.  my-site.com 
2) If you have an IPV6 address.  Create 2 records in your hosted zone.  An A record for IPv4 and an AAAA record for IPv6.