# Personality Test Specification

## 🎯 Objective
Create a 20-question **Yes/No personality test** that determines one of **5 personality types**:
1. **Penyimpan (Saver)**
2. **Pemboros (Spender)**
3. **Pemurah (Giver)**
4. **Pengelak Duit (Money Avoider)**
5. **Pengejar Status (Status Seeker)**

---

## 🧠 Test Rules
- Each question is answered with **Yes (✓)** or **No (✗)**.
- Each "Yes" is worth **1 point**.
- Points are tallied based on question numbers assigned to each personality type.

### Scoring Categories:
| Personality Type           | Question Numbers         |
|--------------------------- |------------------------- |
| Penyimpan (Saver)          | 1, 2, 3, 4             |
| Pemboros (Spender)         | 5, 6, 7, 8             |
| Pemurah (Giver)            | 9, 10, 11, 12          |
| Pengelak Duit (Money Avoider) | 13, 14, 15, 16    |
| Pengejar Status (Status Seeker) | 17, 18, 19, 20 |

The personality type with the **highest total score** determines the result.

---

## 🖼 Result Display
- After completing all 20 questions:
  - Show **personality type**.
  - Show **description and recommendations**.
  - Include **kid-friendly visuals or icons** for each type (e.g., piggy bank for Saver, shopping cart for Spender).

---

## 🔑 User Data Collection
Before starting the test, collect:
- **Name** (text field)
- **Email** (email field)

Store these in Airtable linked to the user's test submission.

---

## 📊 Airtable Structure

### Table 1: `Users`
| Field        | Type         |
|--------------|--------------|
| Name         | Single Line Text |
| Email        | Email        |

### Table 2: `Questions`
| Field        | Type          |
|--------------|-------------- |
| Question No. | Number        |
| Question     | Long Text     |
| Personality Type | Single Select (Saver, Spender, Giver, Money Avoider, Status Seeker) |

### Table 3: `Results`
| Field            | Type         |
|------------------ |--------------|
| User Email        | Linked to Users |
| Answers (JSON)    | Long Text (stores Yes/No per Q) |
| Saver Score       | Number       |
| Spender Score     | Number       |
| Giver Score       | Number       |
| Money Avoider Score | Number    |
| Status Seeker Score | Number    |
| Final Personality | Single Select |
| Timestamp         | Created Time |

---

## 🖥 UI Flow
1. **Login/Signup (via Softr)**
2. **User Info Form** (Name, Email)
3. **Test Questions**:
   - One question per page.
   - Yes/No buttons.
   - "Back" button for navigation.
4. **Submit & Calculate Score**:
   - JS calculates personality based on scores.
   - Save result to Airtable.
5. **Result Page (Instant Display)**:
   - Show personality type description.
   - Show recommendation text + kid-friendly visual.

---

## ⚙️ Technical Notes
- **Frontend**: HTML/CSS/JS with pagination logic for questions.
- **Data Submission**: Use Airtable API to save answers and calculated scores.
- **Result Calculation**: Performed in JS before submitting to Airtable.
- **Visuals**: Use icons (e.g., SVG or PNG) stored in `/assets`.

---

## 🔮 Example Question Format
```json
{
  "no": 1,
  "question": "Do you save part of your allowance every week?",
  "type": "Saver"
}
