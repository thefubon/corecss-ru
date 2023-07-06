type Props ={
  tag?: any
  text?: string
}

export default function Heading ({tag, text, ...props}: Props) {
  const Tag = tag || 'h1'
  return <Tag {...props}>{text}</Tag>
}