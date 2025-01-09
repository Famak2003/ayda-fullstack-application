import crypto from 'crypto';


export default function generateSecureOTP() {
    return crypto.randomInt(100000, 1000000).toString(); // Generates a random number between 100000 and 999999
}