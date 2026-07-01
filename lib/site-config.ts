/** Cấu hình — ưu tiên biến môi trường (Vercel / .env.local), fallback khi không set */

const DEFAULT_AFFILIATE_ID =
  process.env.DEFAULT_AFFILIATE_ID ?? "";

const DEFAULT_FACEBOOK_POST_URL =
  process.env.DEFAULT_FACEBOOK_POST_URL ?? "";

const DEFAULT_ZALO_NOTIFY_GROUP_URL =
  process.env.DEFAULT_ZALO_NOTIFY_GROUP_URL ?? "";

const DEFAULT_ZALO_HELP_URL =
  process.env.DEFAULT_ZALO_HELP_URL ?? "";

/** Chỉ gọi từ server (vd. Route Handler). Không import trong "use client". */
export function getAffiliateId(): string {
  const v = process.env.DEFAULT_AFFILIATE_ID?.trim();
  return v || DEFAULT_AFFILIATE_ID;
}

export const FACEBOOK_POST_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_POST_URL ?? "";

/** Nhóm Zalo thông báo lên mã */
export const ZALO_NOTIFY_GROUP_URL =
  process.env.ZALO_NOTIFY_GROUP_URL?.trim() || DEFAULT_ZALO_NOTIFY_GROUP_URL;

/** Link Zalo trợ giúp */
export const ZALO_HELP_URL =
  process.env.ZALO_HELP_URL?.trim() || DEFAULT_ZALO_HELP_URL;
