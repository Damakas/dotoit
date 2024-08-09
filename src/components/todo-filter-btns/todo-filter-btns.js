import './todo-filter-btns.css'

const FilterBtns = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Comleted' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? ' btn_filter_active' : 'btn_filter'
        return (
            <button
                className={`btn_base ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>{label}</button>
        )
    })

    return (

        <div className='wrapper'>
            {buttons}
        </div>
    )
}

export default FilterBtns