export async function verifyEmail(email: string): Promise<boolean> {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }

    return true;
}