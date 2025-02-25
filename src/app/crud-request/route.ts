const data = [
    {
        id:1,
        message:"Message no.1"
    },
    {
        id:2,
        message:"Message no.2"
    },
    {
        id:3,
        message:"Message no.3"
    },
    {
        id:4,
        message:"Message no.4"
    },
    {
        id:5,
        message:"Message no.5"
    },
]

export async function GET() {
    return new Response(JSON.stringify(data), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  
// dynamic parameter
export async function GET(request:Request, {params:{id:string}}){
    const {id} = await params
    const message = data.find((mess)=>mess.id === perseIn(id))
    return new Response(JSON.stringify(message),{
        status:201,
        headers: {
            "Content-Type": "application/json",
        },
    })
}


export async function POST(request: Request){
    const message = await request.json()
    const newMessage = {
       id:message.id,
       message: message.text
    }
    data.push(newMessage)
    return new Response(JSON.stringify(data),{
       status:201,
       headers: {
           "Content-Type": "application/json",
         },
    })
   }


   export async function PUT(request: Request, {params:{id:string}}){
    const {id} = await params
    const body = await request.json()
    const {text} = body
    const update = data.findIndex((d)=>d.id === perseIn(id))
    data[update].message = text
    return new Response(JSON.stringify(data[id]),{
       status:201,
       headers: {
           "Content-Type": "application/json",
        },
    })
   }
   