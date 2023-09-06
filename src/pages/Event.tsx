import {useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useTypedSelector, useAppDispatch} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";
import { fetchEvents, fetchGuests, createEvent } from '../features/event/actions';

const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {guests,events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGuests());
        dispatch(fetchEvents(user.username));
    }, [dispatch, user])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        console.log({event});
        dispatch(createEvent(event));
    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;
