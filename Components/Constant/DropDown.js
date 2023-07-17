import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {FONTS, SIZES} from '../Theme';

export default function DropDown({details}) {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <View>
      <SelectList
        setSelected={val => setSelected(val)}
        data={details}
        save="value"
        placeholder={'select'}
        dropdownTextStyles={{color: 'black', ...FONTS.h4}}
        inputStyles={{color: 'black', ...FONTS.h4}}
      />
    </View>
  );
}
