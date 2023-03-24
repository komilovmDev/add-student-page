import { useRef, useState } from "react"


export default function AddStudent() {
    const data = [
        { id: 1, dataTitle: "No" },
        { id: 2, dataTitle: "Group Name" },
        { id: 3, dataTitle: "Teacher" },
        { id: 4, dataTitle: "Course Start Date" },
        { id: 5, dataTitle: "Course End Date" },
        { id: 6, dataTitle: "Room Number" },
        { id: 7, dataTitle: "Price" },
        { id: 8, dataTitle: "Zone Number" }
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
    const roomNumberRef = useRef(null); // Add this line
    const priceRef = useRef(null);
    const zoneNumberRef = useRef(null); // Add this line


    function addData() {
        setStudentData([...studentData, {
            id: idRef.current.value,
            teamName: teamNameRef.current.value,
            teacherName: teacherNameRef.current.value,
            startTimeData: startDateRef.current.value,
            closeTimeData: endDateRef.current.value,
            roomNumber: roomNumberRef.current.value,
            price: priceRef.current.value,
            zoneNumber: zoneNumberRef.current.value
        }]);
    }
        

    return (
        <>
            <div class="container" style={{ position: 'relative' }}>
                <div className="dataGrid">
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
                <button className="plusData">+</button>
                <div className="addData">
                    {
                        data.map((item) => (
                            <input type="text" ref={item.id === 1 ? idRef : item.id === 2 ? teamNameRef : item.id === 3 ? teacherNameRef : item.id === 4 ? startDateRef : item.id === 5 ? endDateRef : item.id === 6 ? roomNumberRef : priceRef} placeholder={item.dataTitle} key={item.id} />
                        ))
                    }
                    <button className="saveData" onClick={addData}>QO'SHISH</button>
                </div>
            </div>
        </>
    )
}