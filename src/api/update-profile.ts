import { api } from '@/lib/axios'

interface UpdateProfileBody {
  description: string
  name: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  await api.put('/profile', { name, description })
}
