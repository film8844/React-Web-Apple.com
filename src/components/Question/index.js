import React from 'react';

const Question = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 min-h-screen">
            <table class="border-separate border border-green-800">
                <thead>
                    <tr>
                        <th class="border border-green-600">State</th>
                        <th class="border border-green-600">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-green-600">Indiana</td>
                        <td class="border border-green-600">Indianapolis</td>
                    </tr>
                    <tr>
                        <td class="border border-green-600">Ohio</td>
                        <td class="border border-green-600">Columbus</td>
                    </tr>
                    <tr>
                        <td class="border border-green-600">Michigan</td>
                        <td class="border border-green-600">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Question;
