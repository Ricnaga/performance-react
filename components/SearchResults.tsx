import { ProductItem } from "./ProductItem"
import { List, ListRowRenderer } from 'react-virtualized'

type DataServer = {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
}

interface SearchResultsProps {
    results: Array<DataServer>;
    onAddToWishList: (id: number) => void
    totalPrice: number;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {

    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>
            <List
                height={300}
                rowHeight={25}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}