import { NextResponse, NextRequest } from "next/server";

import api from "@/utils/api";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const q = url.searchParams.get("q");
  const province = url.searchParams.get("province");
  const limit = url.searchParams.get("limit");
  const res = await api.get("/dealers", {
    params: {
      ...(q && { q }),
      ...(province && { province }),
      ...(limit && { limit }),
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
};
