import { NextResponse } from "next/server";

function responseMeta() {
  return {
    requestId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
}

export function apiSuccess<T>(data: T, init?: ResponseInit) {
  return NextResponse.json(
    {
      data,
      meta: responseMeta(),
    },
    init,
  );
}

export function apiError(code: string, message: string, status: number) {
  return NextResponse.json(
    {
      error: {
        code,
        message,
      },
      meta: responseMeta(),
    },
    { status },
  );
}
