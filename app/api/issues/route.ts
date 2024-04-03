/** @format */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "./../../../prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  // stock the request in a body const
  const body = await request.json();

  // Validate the request
  const validation = createIssueSchema.safeParse(body);

  // If invalid, return 400
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  // Create new user
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  // Return new user & 201
  return NextResponse.json(newIssue, { status: 201 });
}
