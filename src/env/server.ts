import "server-only";

export const serverEnv = {
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY!,
	CLOUDFLARE_ANALYTICS_TOKEN: process.env.CLOUDFLARE_ANALYTICS_TOKEN!,
};
