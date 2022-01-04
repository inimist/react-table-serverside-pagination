import React from 'react'
// import Select from 'react-select'

// const statusOptions = [
//     {'value':'', 'label':'All'},
//     {'value':'Active', 'label':'Active'},
//     {'value':'Inactive', 'label':'Inactive'},
//     {'value':'Pending', 'label':'Pending'},
// ]

const UsersFilter = ({onClickFilterCallback, defaultKeyword}) => {
    const [keyword, setKeyword] = React.useState(defaultKeyword)
    const onKeywordChange = ( e ) => {
        setKeyword( e.target.value )
    }
    const onClickSearch = () => {
        onClickFilterCallback(keyword)
    }
    return (
        <div className="form__form-group">
            {/* <div className="col-md-4 px-0">
                <Select
                    value={status}
                    onChange={onStatusChange}
                    options={statusOptions}
                    clearable={false}
                    className="react-select"
                    placeholder={statusPlaceholder}
                    classNamePrefix="react-select"
                />
            </div> */}
            <div className="col-md-4">
                <div className="">
                    <input 
                        value={keyword}
                        onChange={onKeywordChange}
                        type="text"
                        placeholder="Search users"
                    />
                </div>
            </div>
            <div className="col-md-4 d-flex align-items-center max-height-32px pl-1">
                <span className="text-blue pointer" onClick={onClickSearch}>Search</span>
            </div>
        </div>
    )
}

export default UsersFilter;
