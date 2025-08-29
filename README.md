# Bajaj Finserv HL-Task API

This is a REST API built for a hiring challenge. It processes an array of data and returns classified information based on the input.
 
## API Endpoint

- **Method:** `POST`
- **URL:** https://bajaj-finserv-task-ooq35ne9l-nupoors-projects-7286f529.vercel.app/bfhl

### Request Body

The API expects a JSON object with a single key, `data`, which holds an array of strings.

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```
## How to Test 🧪

You can test the live endpoint using the `curl` command in your terminal.

### macOS / Linux

```bash
curl -X POST \
  https://bajaj-finserv-task-ooq35ne9l-nupoors-projects-7286f529.vercel.app/bfhl\
  -H 'Content-Type: application/json' \
  -d '{
    "data": ["a", "1", "334", "4", "R", "$"]
  }' | jq
```

### Windows (Command Prompt)

```cmd
curl -X https://bajaj-finserv-task-ooq35ne9l-nupoors-projects-7286f529.vercel.app/bfhl -H "Content-Type: application/json" -d "{ \"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"] }"
```

---

## Request & Response Examples

### Request Body

The API expects a JSON object with a single key, `data`, which holds an array of strings.

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Success Response

For a successful request, the API will return a JSON object with a `200` status code.

```json
{
  "is_success": true,
  "user_id": "nupoor_sagar_15112004",
  "email": "nupoorsagar2022@vitbhopal.ac.in",
  "roll_number": "22BHI10060",
  "odd_numbers": [
    "1"
  ],
  "even_numbers": [
    "334",
    "4"
  ],
  "alphabets": [
    "A",
    "R"
  ],
  "special_characters": [
    "$"
  ],
  "sum": "339",
  "concat_string": "Ra"
}
```
