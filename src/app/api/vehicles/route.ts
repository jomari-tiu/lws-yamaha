import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const categorySlug = req.nextUrl.searchParams.get("categorySlug");

  const res = await api.get("/vehicles", {
    params: {
      ...(categorySlug && { categorySlug }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
