const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL 연결
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '비밀번호', // 실제 비밀번호로 교체
    database: 'ivy_hosting'
});

db.connect(err => {
    if (err) {
        console.error('DB 연결 실패:', err);
    } else {
        console.log('DB 연결 성공!');
    }
});

// =====================
// CRUD API 예시: 캐릭터 카드
// =====================

// 1. 모든 캐릭터 카드 조회
app.get('/cards', (req, res) => {
    db.query('SELECT * FROM character_cards', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 2. 캐릭터 카드 추가
app.post('/cards', (req, res) => {
    const { name, type, ability } = req.body;
    db.query(
        'INSERT INTO character_cards (name, type, ability) VALUES (?, ?, ?)',
        [name, type, ability],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ id: result.insertId, name, type, ability });
        }
    );
});

// 3. 캐릭터 카드 수정
app.put('/cards/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, ability } = req.body;
    db.query(
        'UPDATE character_cards SET name = ?, type = ?, ability = ? WHERE id = ?',
        [name, type, ability, id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.json({ message: '캐릭터 카드 수정 완료' });
        }
    );
});

// 4. 캐릭터 카드 삭제
app.delete('/cards/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM character_cards WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: '캐릭터 카드 삭제 완료' });
    });
});

// =====================
// 서버 시작
// =====================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//5.MySQL

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '비밀번호',
    database: 'ivy_hosting'
});

