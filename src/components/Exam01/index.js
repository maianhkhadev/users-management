import { useEffect } from 'react';
useEffect()

import React from 'react';
React.useEffect()

const Exam01 = () => {
    const [numbers, setNumbers] = useState([1, 1, 4, 6, 8, 3, 5, 5, 9, 17, 15])

    useEffect(() => {}, [])
    const a = useMemo(() => { return }, [])



    const onClick = () => {
        // lọc ra những số chẵn
        // const newNumbers = numbers.filter((item) => {
        //     return item % 2 === 0
        // })

        // setNumbers(newNumbers)
        // lọc ra những số chia hết cho 3
        // const newNumbers = numbers.filter((item) => {
        //     return item % 3 === 0
        // })

        // setNumbers(newNumbers)
        // lọc ra những số duy nhất
        // const data = {}
        // numbers.forEach((item) => {
        //     data[item] = true 
        // })
        // const newNumbers = Object.keys(data) [1, 4, 6, 8, 3, 5, 9, 17, 15]

        // setNumbers(newNumbers)
    }

    return (
        <div>
            {numbers.map((item) => {

                return (
                    <div>{item}</div>
                )
            })}

            <button onClick={onClick}>Click me</button>
        </div>
    );
  };
  
export default Exam01;
  