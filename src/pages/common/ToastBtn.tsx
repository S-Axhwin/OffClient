import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ToastDemo({btnName, title, des,}:any) {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: title,
          description: des,
        })
      }}
    >
      {btnName}
    </Button>
  )
}
