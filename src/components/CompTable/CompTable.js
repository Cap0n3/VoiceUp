import React, { useState, useEffect, useRef, useContext } from "react";
import {
    TableWrapper,
    Table,
    Thead,
    Tbody,
    Row,
    HeadCell,
    IconWrapper,
    Cell,
    InfoWrapper
 } from "./CompTable.style";
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Gear from "../../assets/icons/misc/gear_icon";
import {BiHelpCircle} from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineMinus } from "react-icons/ai";
import Tooltip from "../Tooltip/Tooltip";
import { VoiceUpColors } from "../../colors";
import { LangContext } from "../../App";

const CompTable = ({isActive, tableData, iconColors}) => {
    const {language} = useContext(LangContext);
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
                                <h2>{(language === "FR") ? "Bimensuel" : "Bimonthly"}</h2>
                            </HeadCell>
                            <HeadCell cellBorder="true">
                                <IconWrapper>
                                    <Rocket fill={iconColors[1]} size="24" />
                                </IconWrapper>
                                <h2>{(language === "FR") ? "Hebdomadaire" : "Weekly"}</h2>
                            </HeadCell>
                            <HeadCell>
                                <IconWrapper>
                                    <Gear fill={iconColors[2]} size="26" />
                                </IconWrapper>
                                <h2>{(language === "FR") ? "à la carte" : "On demand"}</h2>
                            </HeadCell>
                        </Row>
                    </Thead>
                    <Tbody>
                        {tableData.map((data, index) => 
                            <Row key={index} alt={(index % 2 !== 0) ? "true" : ""}>
                                <HeadCell textAlign="left" style={{paddingLeft: "10px"}}>
                                    <InfoWrapper>
                                        <span>{(language === "FR") ? data.titleFR : data.titleEN}</span>
                                        <Tooltip content={(language === "FR") ? data.descriptionFR : data.descriptionEN} place="right" size={data.tooltipSize} boxStyle={{fontColor: "white", bgColor: "#666"}}>
                                            <BiHelpCircle fill={VoiceUpColors.grey} style={{marginTop: "3px"}} />
                                        </Tooltip>
                                    </InfoWrapper>
                                </HeadCell>
                                <Cell>{data.biAdult ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineMinus />}</Cell>
                                <Cell cellBorder="true">{data.weeklyAdult ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineMinus />}</Cell>
                                <Cell>{data.onDemand ? <AiOutlineCheckCircle size="20" fill="green" /> : <AiOutlineMinus />}</Cell>
                            </Row>
                        )}
                    </Tbody>
                </Table>
        </TableWrapper>
    );
}

export default CompTable;