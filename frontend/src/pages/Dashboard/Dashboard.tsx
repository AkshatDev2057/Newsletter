import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit2, Trash2, Calendar, FileText, TrendingUp, X, Type } from 'lucide-react';
import { apiClient } from '../../services/api';

export default function NewsletterDashboard() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ start_date: '', end_date: '', title: '' });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: sections, isLoading } = useQuery({
    queryKey: ['newsSections'],
    queryFn: () => apiClient.get('/news-sections'),
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => apiClient.post('/news-sections', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsSections'] });
      setShowModal(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiClient.delete(`/news-sections/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsSections'] });
    },
  });

  const handleCreate = (data: any) => {
    createMutation.mutate(data);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowModal(true)}>Create Section</button>
      {showModal && (
        <div>
          <h2>Create News Section</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
            setFormData({ start_date: '', end_date: '', title: '' });
          }}>
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
              type="date"
              value={formData.start_date}
              onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
            />
            <input
              type="date"
              value={formData.end_date}
              onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
            />
            <button type="submit">Create</button>
            <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </div>
      )}
      <ul>
        {sections?.map((section: any) => (
          <li key={section.id}>
            {section.title} - {section.start_date} to {section.end_date}
            <button onClick={() => navigate('/create-news-item')}>Manage News</button>
            <button onClick={() => handleDelete(section.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}