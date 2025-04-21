# Abhi IT Solutions Website

This repository contains the source code for the Abhi IT Solutions website.

## Contact Form Setup

The contact form is configured to send emails when users submit their information. To ensure proper functionality, please follow these steps:

### Option 1: Using Main Domain for Contact Endpoint

This option is now set up in the repository:

1. The contact form API endpoint is available at `/contact/index.php` on the main domain
2. Redirects are configured in `_redirects` to ensure both `/api/contact` and the previous mailer subdomain URLs redirect correctly
3. CORS headers are properly set to allow cross-origin requests

### Option 2: Setting up the Mailer Subdomain

If you prefer to use the mailer subdomain as originally intended:

1. Create a DNS record for the `mailer` subdomain pointing to your hosting provider
2. Set up the subdomain in your hosting control panel
3. Deploy the contents of the `mailer` directory to the subdomain root
4. Ensure PHP is enabled on the subdomain

## DNS Configuration Required

To fix the `net::ERR_NAME_NOT_RESOLVED` error, add these DNS records:

```
Type    Name            Value
A       mailer          [Your server IP]
CNAME   mailer          www.abhiitsolutions.com
```

## Testing the Contact Form

After setup, test the contact form by:

1. Navigating to the contact page
2. Filling out the form
3. Submitting and verifying that no console errors occur
4. Checking that the email is received at the configured destination (info@abhiitsolutions.com)

## Troubleshooting

If the contact form still fails:

1. Check browser console for exact error messages
2. Verify DNS propagation for the subdomain using tools like `dig` or `nslookup`
3. Test the API endpoint directly with a tool like Postman or curl
4. Check server logs for any PHP errors or mail configuration issues

## Contact

For assistance with website setup or technical issues, please contact the administrator at info@abhiitsolutions.com.
