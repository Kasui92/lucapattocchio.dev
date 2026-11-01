import { getImage } from 'astro:assets'
import profileImage from '@/assets/images/profile.jpg'

export const getAvatar = () => getImage({ src: profileImage, width: 128, height: 128, fit: 'cover', format: 'webp' })
