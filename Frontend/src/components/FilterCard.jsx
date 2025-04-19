import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "UI/UX Designer", "DevOps Engineer"]
    },
    {
        fitlerType: "Default",
        array: ["All"]
    }
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue])

    return (
        <div className='w-full bg-white p-5 rounded-xl shadow-lg'>
            <h1 className='font-bold text-2xl mb-4'>Filter Jobs</h1>
            <hr className='my-4' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => (
                        <div key={index} className="mb-6">
                            <h1 className='font-semibold text-xl mb-3'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}` //any unique id
                                    return (
                                        <div key={itemId} className='flex items-center space-x-3 my-3'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId} className="text-base">{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard