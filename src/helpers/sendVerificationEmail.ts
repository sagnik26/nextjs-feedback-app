import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendverificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Feedback App Verification Code',
            react: VerificationEmail({ username: username, otp: verifyCode }),
          });
        return {
            success: true,
            message: "verification email sent"
        }
    }
    catch (emailError) {
        console.log("Error sending verification email", emailError);
        return {
            success: false,
            message: 'Failed to send verification email'
        }
    }
}


