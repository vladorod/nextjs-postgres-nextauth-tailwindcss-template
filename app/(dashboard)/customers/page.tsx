import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function CustomersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Клиенты</CardTitle>
        <CardDescription>Посмотреть всех клиентов и их заказы</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
