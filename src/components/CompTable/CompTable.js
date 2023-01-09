import React, { useState, useEffect, useRef } from "react";
import {
    TableWrapper,
    Table,
    Thead,
    Tbody,
    Row,
    HeadCell,
    IconWrapper,
    Cell
 } from "./CompTable.style";
 import Turtle from "../../assets/icons/myIcons/turtle_icon";
 import Rocket from "../../assets/icons/myIcons/rocket_icon";
 import Gear from "../../assets/icons/misc/gear_icon";
 import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const CompTable = ({isActive, tableData, iconColors}) => {
    const [tableHeight, setTableHeight] = useState(0);
    const tableRef = useRef(null);
    
    useEffect(() => {
        if(tableRef.current != null) {
            setTableHeight(tableRef.current.clientHeight);
        }
    }, [tableRef])

    return(
        <TableWrapper tableHeight={tableHeight}>
            <Table className={isActive} ref={tableRef}>
                    <Thead>
                        <Row rowHeight="180px">
                            <td className="empty"></td>
                            <HeadCell>
                                <IconWrapper>
                                    <Turtle fill={iconColors[0]} size="32"/>
                                </IconWrapper>
                                <h2>Bimensuel</h2>
                            </HeadCell>
                            <HeadCell cellBorder="true">
                                <IconWrapper>
                                    <Rocket fill={iconColors[1]} size="24" />
                                </IconWrapper>
                                <h2>Hebdomadaire</h2>
                            </HeadCell>
                            <HeadCell>
                                <IconWrapper>
                                    <Gear fill={iconColors[2]} size="26" />
                                </IconWrapper>
                                <h2>à la carte</h2>
                            </HeadCell>
                        </Row>
                    </Thead>
                    <Tbody>
                        {tableData.map((data, index) => 
                            <Row key={index} alt={(index % 2 !== 0) ? "true" : ""}>
                                <HeadCell textAlign="left" style={{paddingLeft: "10px"}}><span>{data.titleFR}</span></HeadCell>
                                <Cell>{data.biAdult ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineCloseCircle size="20" fill="red" />}</Cell>
                                <Cell cellBorder="true">{data.weeklyAdult ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineCloseCircle size="20" fill="red" />}</Cell>
                                <Cell>{data.onDemand ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineCloseCircle size="20" fill="red" />}</Cell>
                            </Row>
                        )}
                    </Tbody>
                </Table>
        </TableWrapper>
    );
}

export default CompTable;