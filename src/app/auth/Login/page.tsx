import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';

export default function Login() {
  return (
        <div className='min-h-screen flex items-center justify-center'>
          <Card className='mb-2 block w-auto min-h-0'>
      <form className="items-center justify-center space-y-10 ">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div className="">
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Password"
          />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>   
    </Card>
    </div>
  )
}


