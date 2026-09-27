# KnowledgePilot AI

KnowledgePilot AI is a production-oriented document question-answering platform. Users can create separate workspaces, upload project documents, and ask questions in natural language. The system searches project documents first and can use web search as a fallback when the internal knowledge base does not contain enough information.

## What it does

- Secure sign-in and protected application routes
- Project-based workspaces for separating knowledge
- PDF and text document uploads
- Background document processing
- Semantic, keyword, and hybrid retrieval
- Conversational chat over project documents
- Internal-document-first answers with optional web fallback
- API proxying from the Vercel frontend to the backend service

## Architecture

```text
Browser
  |
  v
Next.js frontend on Vercel
  |
  v
FastAPI backend on Amazon ECS/Fargate
  |                    |
  v                    v
Supabase/PostgreSQL     Redis + background worker
  |
  v
pgvector document search
```

## Technology

### Frontend

- Next.js and React
- TypeScript
- Tailwind CSS
- Clerk authentication

### Backend and AI

- Python and FastAPI
- OpenAI models and embeddings
- LangChain and LangGraph agent workflows
- Vector, keyword, hybrid, and multi-query retrieval
- RRF ranking for combining search results
- Celery and Redis for background document processing

### Data and infrastructure

- Supabase PostgreSQL with pgvector
- S3-compatible object storage
- Docker
- Amazon ECR
- Amazon ECS with Fargate
- Application Load Balancer
- Amazon ElastiCache for Redis
- Vercel and GitHub
- CloudWatch and structured application logs

## Local development

### Frontend

```powershell
cd client
npm install
npm run dev
```

The frontend runs at [http://localhost:3000](http://localhost:3000).

### Backend

Install the Python dependencies with Poetry, configure the server environment variables, and start the API and worker services using the project's Docker Compose configuration.

Typical local services include:

- FastAPI API
- Celery worker
- Redis

Never commit real API keys or secrets. Use local environment files and configure production values in the deployment platform.

## Production deployment

The frontend is deployed from the main GitHub branch to Vercel. The backend is packaged as a Docker image, pushed to Amazon ECR, and run as separate ECS/Fargate API and worker services. The Application Load Balancer provides the backend entry point, while the Vercel rewrite routes browser requests to the API.

Before testing document questions in production:

1. Confirm the API and worker services are running.
2. Confirm the load balancer target is healthy.
3. Upload a document to a project.
4. Wait for background processing to finish.
5. Ask a question and verify that the answer uses the uploaded document.
6. Check Vercel and ECS/CloudWatch logs if a request fails.

## Project structure

```text
client/   Next.js user interface and authentication flows
server/   FastAPI API, RAG pipeline, agents, ingestion, and workers
```

## Author

Built and maintained by **Raja Muthuraman** as an end-to-end AI engineering project covering product development, retrieval-augmented generation, cloud deployment, and production troubleshooting.

## License

This repository is intended for demonstration and development purposes. Add a formal license before distributing it as an open-source package.
