import { NextRequest, NextResponse } from 'next/server'

// GET /api/vaccinations
export async function GET(request: NextRequest) {
  console.log("🔥 GET API Route called")

  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 })
    }

    // TODO: Replace with DB fetch
    const vaccinations: any[] = []

    return NextResponse.json(vaccinations)
  } catch (error: any) {
    console.error("❌ GET Error:", error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/vaccinations
export async function POST(request: NextRequest) {
  console.log("🔥 POST API Route called")

  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 })
    }

    const body = await request.json()
    console.log("📋 Request body:", body)

    const { name, dueDate, status, notes, ageGroup, category } = body

    if (!name || !dueDate || !status || !ageGroup || !category) {
      return NextResponse.json({
        message: 'Missing required fields',
        required: ['name', 'dueDate', 'status', 'ageGroup', 'category'],
        received: body
      }, { status: 400 })
    }

    const newVaccination = {
      _id: Date.now().toString(),
      name,
      dueDate,
      status,
      notes: notes || '',
      ageGroup,
      category,
      createdAt: new Date().toISOString()
    }

    console.log("✅ Creating vaccination:", newVaccination)

    return NextResponse.json(newVaccination, { status: 201 })
  } catch (error: any) {
    console.error("❌ POST Error:", error)
    return NextResponse.json({
      message: 'Internal server error',
      error: error.message
    }, { status: 500 })
  }
}
