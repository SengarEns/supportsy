import { UserInterface } from "@/types/user/interface"

export const AgentJson = () => [
    {
      "agent_id": "A001",
      "first_name": "John",
      "last_name": "Doe",
      "status": "active",
      "email": "john.doe@callcenter.com",
      "phone": "+1-555-123-4567",
      "department": "Customer Support",
      "shift": "09:00-17:00",
      "location": "New York"
    },
    {
      "agent_id": "A002",
      "first_name": "Jane",
      "last_name": "Smith",
      "status": "inactive",
      "email": "jane.smith@callcenter.com",
      "phone": "+1-555-987-6543",
      "department": "Sales",
      "shift": "13:00-21:00",
      "location": "Chicago"
    },
    {
      "agent_id": "A003",
      "first_name": "Alex",
      "last_name": "Johnson",
      "status": "active",
      "email": "alex.johnson@callcenter.com",
      "phone": "+1-555-456-7890",
      "department": "Technical Support",
      "shift": "17:00-01:00",
      "location": "San Francisco"
    },
    {
      "agent_id": "A004",
      "first_name": "Emily",
      "last_name": "Brown",
      "status": "active",
      "email": "emily.brown@callcenter.com",
      "phone": "+1-555-234-5678",
      "department": "Customer Support",
      "shift": "08:00-16:00",
      "location": "Boston"
    },
    {
      "agent_id": "A005",
      "first_name": "Michael",
      "last_name": "Wilson",
      "status": "active",
      "email": "michael.wilson@callcenter.com",
      "phone": "+1-555-345-6789",
      "department": "Sales",
      "shift": "10:00-18:00",
      "location": "Miami"
    },
    {
      "agent_id": "A006",
      "first_name": "Sarah",
      "last_name": "Davis",
      "status": "inactive",
      "email": "sarah.davis@callcenter.com",
      "phone": "+1-555-456-1234",
      "department": "Technical Support",
      "shift": "12:00-20:00",
      "location": "Seattle"
    },
    {
      "agent_id": "A007",
      "first_name": "David",
      "last_name": "Clark",
      "status": "active",
      "email": "david.clark@callcenter.com",
      "phone": "+1-555-567-2345",
      "department": "Customer Support",
      "shift": "07:00-15:00",
      "location": "Austin"
    },
    {
      "agent_id": "A008",
      "first_name": "Laura",
      "last_name": "Martinez",
      "status": "active",
      "email": "laura.martinez@callcenter.com",
      "phone": "+1-555-678-3456",
      "department": "Sales",
      "shift": "11:00-19:00",
      "location": "Los Angeles"
    },
    {
      "agent_id": "A009",
      "first_name": "Chris",
      "last_name": "Lee",
      "status": "inactive",
      "email": "chris.lee@callcenter.com",
      "phone": "+1-555-789-4567",
      "department": "Technical Support",
      "shift": "15:00-23:00",
      "location": "Denver"
    },
    {
      "agent_id": "A010",
      "first_name": "Anna",
      "last_name": "Taylor",
      "status": "active",
      "email": "anna.taylor@callcenter.com",
      "phone": "+1-555-890-5678",
      "department": "Customer Support",
      "shift": "09:00-17:00",
      "location": "Phoenix"
    },
    {
      "agent_id": "A011",
      "first_name": "Mark",
      "last_name": "Anderson",
      "status": "active",
      "email": "mark.anderson@callcenter.com",
      "phone": "+1-555-901-6789",
      "department": "Sales",
      "shift": "13:00-21:00",
      "location": "Atlanta"
    },
    {
      "agent_id": "A012",
      "first_name": "Lisa",
      "last_name": "White",
      "status": "active",
      "email": "lisa.white@callcenter.com",
      "phone": "+1-555-012-7890",
      "department": "Technical Support",
      "shift": "17:00-01:00",
      "location": "Portland"
    },
    {
      "agent_id": "A013",
      "first_name": "Tom",
      "last_name": "Harris",
      "status": "inactive",
      "email": "tom.harris@callcenter.com",
      "phone": "+1-555-123-8901",
      "department": "Customer Support",
      "shift": "08:00-16:00",
      "location": "Houston"
    },
    {
      "agent_id": "A014",
      "first_name": "Rachel",
      "last_name": "Moore",
      "status": "active",
      "email": "rachel.moore@callcenter.com",
      "phone": "+1-555-234-9012",
      "department": "Sales",
      "shift": "10:00-18:00",
      "location": "Dallas"
    },
    {
      "agent_id": "A015",
      "first_name": "James",
      "last_name": "Walker",
      "status": "active",
      "email": "james.walker@callcenter.com",
      "phone": "+1-555-345-0123",
      "department": "Technical Support",
      "shift": "12:00-20:00",
      "location": "San Diego"
    }
  ]


export const UserJson = ():UserInterface[] => [
  {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Alice Admin",
      "email": "master@supportsy.com",
      "password": "123456",
      "role": "master",
      "created_at": "2025-05-02T12:00:00Z",

  },
  {
      "id": "b2c3d4e5-f6a7-8901-bcde-f2345678901a",
      "name": "Bob Owner",
      "email": "owner@supportsy.com",
      "password": "123456",
      "role": "softwareOwner",
      "created_at": "2025-05-02T12:01:00Z",

  },
  {
      "id": "c3d4e5f6-a7b8-9012-cdef-3456789012bc",
      "name": "Charlie Brand",
      "email": "brand@supportsy.com",
      "password": "123456",
      "role": "brand",
      "created_at": "2025-05-02T12:02:00Z",

  },
  {
      "id": "d4e5f6a7-b8c9-0123-def0-4567890123cd",
      "name": "Diana Manager",
      "email": "diana.manager@supportsy.com",
      "password": "123456",
      "role": "manager",
      "created_at": "2025-05-02T12:03:00Z",

  },
  {
      "id": "e5f6a7b8-c9d0-1234-efa1-5678901234de",
      "name": "Eve Floor",
      "email": "eve.floor@supportsy.com",
      "password": "123456",
      "role": "floorManager",
      "created_at": "2025-05-02T12:04:00Z",

  },
  {
      "id": "f6a7b8c9-d0e1-2345-fab2-6789012345ef",
      "name": "Frank Super",
      "email": "frank.super@supportsy.com",
      "password": "123456",
      "role": "superAgent",
      "created_at": "2025-05-02T12:05:00Z",

  },
  {
      "id": "a7b8c9d0-e1f2-3456-abc3-7890123456fa",
      "name": "Grace Agent",
      "email": "grace.agent@supportsy.com",
      "password": "123456",
      "role": "agent",
      "created_at": "2025-05-02T12:06:00Z",

  }
]

