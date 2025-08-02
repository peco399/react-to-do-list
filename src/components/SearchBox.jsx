const SearchBox = ({ searchValue, setSearchValue }) => {
return (
    <div>
    <input 
        type="text" 
        value={searchValue} 
        onChange={e => setSearchValue(e.target.value)}
        placeholder="検索..."
    />
    </div>
)
}

export default SearchBox