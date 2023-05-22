import React, {useContext} from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {Context} from "../../index";

const FriendBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <ListGroup  as="ol" numbered>
                {
                    user.user.map(users =>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            style={{cursor:"pointer"}}
                            onClick={()=>{
                                // worker.setManagePage(false)
                                // worker.setProjectPage(false)
                                // worker.setIdeaPage(false)
                                // worker.setLearnPage(false)
                                // worker.setProfilePage(true)
                                user.setCurrentProfile(users)
                            }
                            }
                        >
                            <Image src={} width={50} height={50}></Image>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{users.name}</div>
                                <div style={{fontSize: 12}}>{users.role}</div>
                            </div>
                            <Badge bg="primary" pill>

                            </Badge>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default FriendBar;