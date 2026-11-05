Kyoto Trip Planner
An Airbnb-inspired conversational trip planner that helps guests discover a stay, an experience and food recommendations for a Kyoto weekend through a single chat request.
Project Overview
The Kyoto Trip Planner explores a simpler alternative to traditional travel search filters. Guests can enter their trip requirements naturally and receive three recommendations together in one conversational response.
Key Features
- Conversational trip-planning interface
- Animated thinking indicator
- Input locking while generating recommendations
- Three recommendation cards: Stay, Experience and Food
- Responsive desktop and mobile layouts
- Workbook-based mock recommendation data
- Reusable React components
- Editable SVG icons
Recommendation Cards
1. Stay
Gion Machiya House
- Location: Gion, Kyoto
- Check-in: April 12, 2025
- Check-out: April 14, 2025
- Price: $185 per night
- Highlight: Private tatami garden
2. Experience
Matcha Tea Ceremony
- Location: Uji
- Date: April 12, 2025
- Time: 10:00 AM
- Duration: 90 minutes
- Price: $48 USD
3. Food
Nishiki Market Stalls
- Location: Nakagyo, Kyoto
- Cuisine: Street food
- Price range: $
- Opening hours: 09:00–18:00
- Must-order: Tako tamago
Application States
01. Thinking State
After the guest submits a trip request, the message input temporarily locks while an animated thinking indicator appears in the assistant reply bubble.

02. Error State
Type "break my trip" in the chat to simulate a failed trip-planning response. The trigger is trimmed and compared without regard to letter casing, so BREAK MY TRIP and  Break My Trip  trigger the same error.

The broken mock response in `data/mockBrokenResponse.ts` is intentionally invalid and fails runtime validation. The failure is handled inline; no technical error details are shown. Try Again retries the original request without repeating the test failure, and all three recommendation cards return after recovery.

![Kyoto Trip Planner error state](public/screenshots/04-error-state.png)

![Kyoto Trip Planner retry success](public/screenshots/05-retry-success.png)

03. Cards State
After a successful request or retry, the planner displays three recommendations together:
- Stay
- Experience
- Food

Technology Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- SVG icons
Getting Started
Clone the repository and install dependencies:
git clone https://github.com/Azodeuse9/kyoto-trip-planner.git
cd kyoto-trip-planner
npm install
Example Trip Requests
The chat includes these clickable example trip requests:
1. "Plan a weekend trip to Kyoto from April 12 to April 14."
2. "I want a traditional stay in Gion, a cultural tea experience and local street food."
3. "Help me plan a two-day Kyoto getaway with somewhere to stay, an activity and somewhere to eat."
Each normal request returns the same workbook-backed mock response with Stay, Experience and Food recommendations. Enter break my trip (in any letter casing and with optional surrounding whitespace) to test the error message and Try again recovery flow.
Happy-Path Preview

![Kyoto Trip Planner happy path](screenshots/03-cards-state.png)

Run locally: From the project directory, run npm run dev and open http://localhost:3000.
Project Structure
kyoto-trip-planner/
├── app/
├── components/
├── data/
├── icons/
├── images/
├── public/
├── screenshots/
├── types/
├── README.md
└── package.json
Data Source
The recommendation content is based on the Kyoto weekend workbook, using one mock response item from each worksheet: Stays, Experiences and Food.
Project Status
Happy-path prototype development and visual refinement.