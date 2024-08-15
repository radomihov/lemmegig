import { useState } from 'react';

function DateTimePicker() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = () => {
        if (date && time) {
            const [hours, minutes] = time.split(':');
            const selectedDateTime = new Date(date);
            selectedDateTime.setHours(hours);
            selectedDateTime.setMinutes(minutes);

            // Format the datetime as needed or send it directly
            console.log(selectedDateTime); // This is your combined DateTime object

            // Send this to your API as "start"
            // axios.post('/your-api', { start: selectedDateTime });
        } else {
            alert('Please select both date and time');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700">Select Date:</label>
                    <input
                        type="date"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Select Time:</label>
                    <input
                        type="time"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default DateTimePicker;