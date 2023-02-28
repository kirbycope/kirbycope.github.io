# kirbycope.github.io
A portfolio site hosted on GitHub Pages.

## LINKS
- https://kirbycope.github.io/
- https://timothycope.com/

## How to deploy GitHub pages with AWS Route 53 registered custom domain and force HTTPS
Original Source - https://benwiz.com/blog/deploy-github-pages-with-aws-route-53-and-https/
1. Create your `{username}.github.io` repo by following the [official guide](https://pages.github.com/).
1. Add a file to the root of your repo, `CNAME`
1. In the body of the file enter your domain name
   - You can see mine in this repo, it is `timothycope.com`
1. In your GitHub repo's "Settings" tab
1. Select "GitHub Pages"
1. Ensure "Enforce HTTPS" is set to `true`
1. Log in to AWS Console and go to the [Route53 dashboard](https://console.aws.amazon.com/route53/home)
1. Select "Hosted Zone"
1. Select the domain you entered in the CNAME
1. Select "Create record"
   - Record name: `` (leave blank)
   - Record type: `A – Routes traffic to an IPv4 address and some AWS resources`
   - Alias: `false`
   - Value:
      ```
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
   - TTL (seconds): `300`
   - Routing policy: `Simple Routing`
1. Select "Create records"
1. Select "Create record"
   - Record name: `www`
   - Record type: `A – Routes traffic to an IPv4 address and some AWS resources`
   - Alias: `true`
   - Route traffic to: `Alias to another record in this hosted zone`
      - Select the previously created record
   - Routing policy: `Simple Routing`
   - Evaluate target health: `true`
1. Select "Create records"
