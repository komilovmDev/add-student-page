import { useRef, useState } from "react"


export default function AddStudent() {
    const data = [
        { id: 1, dataTitle: "№" },
        { id: 2, dataTitle: "Guruh Nomi" },
        { id: 3, dataTitle: "O'qtuvchi" },
        { id: 4, dataTitle: "Kurs Boshlanish Sanasi" },
        { id: 5, dataTitle: "Kurs Tugash Sanasi" },
        { id: 6, dataTitle: "Xona Raqami" },
        { id: 7, dataTitle: "Narx" }
    ]

    const [studentData, setStudentData] = useState([
        {
            id: 1,
            teamName: "Frontend",
            teacherName: "Jalol Imamadinov",
            startTimeData: "05/03/23",
            closeTimeData: "03/03/24",
            zonaNumber: 9,
            price: '750,000'
        },
        {
            id: 2,
            teamName: "Beckend",
            teacherName: "Jalol Imamadinov",
            startTimeData: "05/03/23",
            closeTimeData: "03/03/24",
            zonaNumber: 4,
            price: '750,000'
        }
    ])

    const idRef = useRef(null);
    const teamNameRef = useRef(null);
    const teacherNameRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const numberRef = useRef(null);

    const priceRef = useRef(null);

    function addData() {
        if (idRef !== '' && teamNameRef !== '' && teacherNameRef !== '' && startDateRef !== '' && endDateRef !== '' && numberRef !== '' && priceRef !== '') {
            setStudentData([...studentData, {
                id: idRef.current.value,
                teamName: teamNameRef.current.value,
                teacherName: teacherNameRef.current.value,
                startTimeData: startDateRef.current.value,
                closeTimeData: endDateRef.current.value,
                zoneNumber: parseInt(numberRef.current.value),
                price: priceRef.current.value
            }]);            
        }
    }
    
    const [IsOpen , setIsOpen] = useState('addData close')


    return (
        <>
            <div class="container" style={{ position: 'relative' }}>
                <div className="dataGrid" onClick={() => setIsOpen('addData close')}>
                    <table>
                        <tr className="headerTitle">
                            {
                                data.map((item) => (
                                    <td>{item.dataTitle}</td>
                                ))
                            }
                        </tr>
                        {
                            studentData.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.teamName}</td>
                                    <td>{item.teacherName}</td>
                                    <td>{item.startTimeData}</td>
                                    <td>{item.closeTimeData}</td>
                                    <td>{item.zonaNumber}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <button className="plusData" onClick={() => setIsOpen('addData')}>+</button>
                <div className={IsOpen}>
                    {
                        data.map((item) => (
                            <input type={item.id === 1 ? 'number' : 'text'} ref={item.id === 1 ? idRef : item.id === 2 ? teamNameRef : item.id === 3 ? teacherNameRef : item.id === 4 ? startDateRef : item.id === 5 ? endDateRef : item.id === 6 ? numberRef : priceRef} placeholder={item.dataTitle} key={item.id} />
                        ))
                    }
                    <button className="saveData" onClick={addData}>QO'SHISH</button>
                </div>
            </div>
        </>
    )
}