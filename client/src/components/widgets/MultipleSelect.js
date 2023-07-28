import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { setfilteredClassList } from "../../store"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const clouds = [
    'AWS',
    'Google',
];

export default function MultipleSelect() {
    const theme = useTheme();
    const [cloudName, setCloudName] = React.useState([]);
    const dispatch = useDispatch();
    const allClasses = useSelector((state) => state.classes.allClasses);
    let filteredClasses = useSelector((state) => state.classes.filteredClasses);
    let searchingResult = [];

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        for (let cloudNameForSearch of event.target.value) {
            const searchKeyWord = cloudNameForSearch.toLowerCase();
            const result = filteredCategory(searchKeyWord)
            const index =  event.target.value.indexOf(cloudNameForSearch);
            if(index ===0){
                searchingResult = [...result];
            }else{
                searchingResult.push(...result)
            }
        }
        dispatch(setfilteredClassList({
            filteredClasses: searchingResult
        }))

        setCloudName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const filteredCategory = (searchKeyWord) => {
        // to filter class items based on the category property
        const foundClass = allClasses.filter((classItem) =>
            classItem.category.toLowerCase().includes(searchKeyWord)
        );
        // dispatch(setfilteredClassList({
        //     ...filteredClasses,
        //     foundClass
        // }))
        // The filteredClasses array is returned as the result of the function
        return foundClass;
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Cloud</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={cloudName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Cloud" />}
                    MenuProps={MenuProps}
                >
                    {clouds.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}