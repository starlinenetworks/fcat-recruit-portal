import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  applicationId: string;
  email: string;
  fullName: string;
  applicationNumber: string;
  positionTitle: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { applicationId, email, fullName, applicationNumber, positionTitle }: EmailRequest = await req.json();

    console.log("Sending confirmation email for application:", applicationNumber);

    const emailResponse = await resend.emails.send({
      from: "FCAT Recruitment <noreply@resend.dev>",
      to: [email],
      subject: "Application Confirmation - FCAT Recruitment Portal",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Confirmation</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .container {
              background-color: white;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #e1e5e9;
            }
            .logo {
              font-size: 24px;
              font-weight: bold;
              color: #2563eb;
              margin-bottom: 10px;
            }
            .application-number {
              background-color: #f0f9ff;
              border: 2px solid #2563eb;
              border-radius: 8px;
              padding: 15px;
              text-align: center;
              margin: 20px 0;
            }
            .application-number .label {
              font-size: 14px;
              color: #64748b;
              margin-bottom: 5px;
            }
            .application-number .number {
              font-size: 24px;
              font-weight: bold;
              color: #2563eb;
              font-family: 'Courier New', monospace;
            }
            .details {
              background-color: #f8fafc;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .details h3 {
              margin-top: 0;
              color: #1e293b;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              padding-bottom: 8px;
              border-bottom: 1px solid #e2e8f0;
            }
            .detail-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
            .detail-label {
              font-weight: 600;
              color: #475569;
            }
            .detail-value {
              color: #1e293b;
            }
            .important-note {
              background-color: #fef3c7;
              border-left: 4px solid #f59e0b;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .next-steps {
              background-color: #ecfdf5;
              border-left: 4px solid #10b981;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              color: #64748b;
              font-size: 14px;
            }
            .contact-info {
              background-color: #f1f5f9;
              border-radius: 8px;
              padding: 15px;
              margin: 20px 0;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">FCAT RECRUITMENT PORTAL</div>
              <h1 style="color: #1e293b; margin: 0;">Application Confirmation</h1>
            </div>

            <p style="font-size: 16px;">Dear <strong>${fullName}</strong>,</p>

            <p>Thank you for submitting your application through the FCAT Recruitment Portal. We have successfully received your application and it is now under review.</p>

            <div class="application-number">
              <div class="label">Your Application Number</div>
              <div class="number">${applicationNumber}</div>
            </div>

            <div class="details">
              <h3>Application Summary</h3>
              <div class="detail-row">
                <span class="detail-label">Position Applied For:</span>
                <span class="detail-value">${positionTitle}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Applicant Name:</span>
                <span class="detail-value">${fullName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email Address:</span>
                <span class="detail-value">${email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Submission Date:</span>
                <span class="detail-value">${new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
            </div>

            <div class="important-note">
              <strong>Important:</strong> Please save your application number <strong>${applicationNumber}</strong> for future reference. You will need this number for any inquiries about your application status.
            </div>

            <div class="next-steps">
              <h4 style="margin-top: 0; color: #059669;">What happens next?</h4>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Our recruitment team will review your application</li>
                <li>Qualified candidates will be contacted for further assessment</li>
                <li>You will be notified of any updates via email</li>
                <li>The review process typically takes 2-3 weeks</li>
              </ul>
            </div>

            <div class="contact-info">
              <h4 style="margin-top: 0; color: #1e293b;">Need Help?</h4>
              <p style="margin: 5px 0;">If you have any questions about your application, please contact us:</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> recruitment@fcat.org</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> +234-XXX-XXXX-XXX</p>
            </div>

            <p>We appreciate your interest in joining our organization and look forward to reviewing your qualifications.</p>

            <p>Best regards,<br>
            <strong>FCAT Recruitment Team</strong></p>

            <div class="footer">
              <p>This is an automated message. Please do not reply to this email.</p>
              <p>&copy; ${new Date().getFullYear()} FCAT. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);