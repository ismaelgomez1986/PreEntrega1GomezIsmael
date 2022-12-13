import ItemList from './ItemList';

function ItemListContainer({ greetings }) {
    return (
        <div>
            <div className="text-3xl py-3 italic">{greetings}!</div>
            <ItemList />
        </div>
    )
}
export default ItemListContainer