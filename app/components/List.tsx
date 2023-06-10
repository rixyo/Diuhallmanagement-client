
interface ListProps {
    label: string;
}
const List: React.FC<ListProps> = ({ label }) => {
    return (
       <li className="text-lg font-medium list-disc">{label}</li>
    )
}
export default List;