import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <Link to={'/'} className="w-full flex justify-end">
          <Icon icon={'ic:baseline-close'} />
        </Link>
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your username and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="text-center">
            <CardDescription>Don't have an account?</CardDescription>
            <Link to="/Register">
              <Button variant="link" className="mt-2">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Login
