// components/ClientReviewsAndRatings.jsx (or app/reviews/page.jsx)
"use client";

import React, { useState, useMemo } from 'react';
import { FaStar } from 'react-icons/fa'; // Ensure you have react-icons installed: npm install react-icons

// --- StarRating Helper Component ---
const StarRating = ({ rating, totalStars = 5, onRate, hoverRating, size = 'text-xl' }) => (
    <div className="flex text-yellow-500">
        {[...Array(totalStars)].map((_, i) => {
            const starValue = i + 1;
            return (
                <FaStar
                    key={i}
                    className={`
                        ${size}
                        transition-colors duration-200
                        ${starValue <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}
                        ${onRate ? 'cursor-pointer' : ''}
                    `}
                    onClick={() => onRate && onRate(starValue)}
                    onMouseEnter={() => onRate && onRate(starValue, 'hover')}
                    onMouseLeave={() => onRate && onRate(0, 'hover')}
                />
            );
        })}
    </div>
);

// --- TalentReviewsDisplay Component (Displays reviews from Clients about the Talent) ---
const TalentReviewsDisplay = ({ reviews, clients }) => {
    const [selectedClientId, setSelectedClientId] = useState('');
    const [filterRating, setFilterRating] = useState(0); // 0 for all ratings
    const [sortBy, setSortBy] = useState('recent'); // 'recent', 'highest', 'lowest'

    // Calculate average rating and total reviews for display
    const averageRating = useMemo(() => {
        const filteredReviews = selectedClientId
            ? reviews.filter(r => r.clientId === selectedClientId)
            : reviews;

        if (filteredReviews.length === 0) return { avg: 0, count: 0 };

        const totalRating = filteredReviews.reduce((sum, r) => sum + r.rating, 0);
        return {
            avg: (totalRating / filteredReviews.length).toFixed(1),
            count: filteredReviews.length
        };
    }, [reviews, selectedClientId]);

    const displayedReviews = useMemo(() => {
        let filtered = Array.isArray(reviews) ? [...reviews] : [];

        if (selectedClientId) {
            filtered = filtered.filter(review => review.clientId === selectedClientId);
        }

        if (filterRating > 0) {
            filtered = filtered.filter(review => review.rating === filterRating);
        }

        switch (sortBy) {
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'recent':
            default:
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        return filtered;
    }, [reviews, selectedClientId, filterRating, sortBy]);

    return (
        <div className="space-y-6">
            {/* Overall Summary & Filters */}
            <div className="p-4 bg-muted rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-primary">{averageRating.avg}</div>
                    <div className="flex flex-col">
                        <StarRating rating={Math.round(parseFloat(averageRating.avg))} size="text-2xl" />
                        <span className="text-sm text-muted-foreground">{averageRating.count} Total Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="client-select" className="block text-sm font-medium mb-2 text-foreground">
                            Filter by Client:
                        </label>
                        <select
                            id="client-select"
                            value={selectedClientId}
                            onChange={(e) => setSelectedClientId(e.target.value)}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value="">All Clients</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>
                                    {client.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="rating-filter" className="block text-sm font-medium mb-2 text-foreground">
                            Filter by Rating:
                        </label>
                        <select
                            id="rating-filter"
                            value={filterRating}
                            onChange={(e) => setFilterRating(parseInt(e.target.value))}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value={0}>All Ratings</option>
                            <option value={5}>5 Stars</option>
                            <option value={4}>4 Stars</option>
                            <option value={3}>3 Stars</option>
                            <option value={2}>2 Stars</option>
                            <option value={1}>1 Star</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="sort-by" className="block text-sm font-medium mb-2 text-foreground">
                            Sort By:
                        </label>
                        <select
                            id="sort-by"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Individual Review Cards */}
            {displayedReviews.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                    No reviews found matching your criteria.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedReviews.map(review => (
                        <div
                            key={review.id}
                            className="p-5 rounded-lg shadow-md bg-background border border-border text-left animate-fade-in"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg text-foreground">{review.title}</h3>
                                <StarRating rating={review.rating} size="text-xl" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                By {review.reviewer} {review.clientId && `for ${clients.find(c => c.id === review.clientId)?.name || 'Unknown Client'}`} - {new Date(review.date).toISOString().slice(0, 10)}
                            </p>
                            <p className="text-base text-card-foreground">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- SubmitTalentReviewForm Component (Talent submits a review for a Client) ---
const SubmitTalentReviewForm = ({ clients, projects, onSubmit }) => {
    const [clientId, setClientId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [title, setTitle] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Ensure all state is initialized with primitives for hydration safety

    // Filter projects based on selected client
    const clientProjects = useMemo(() => {
        if (!clientId) return [];
        return Array.isArray(projects) ? projects.filter(p => p.clientId === clientId) : [];
    }, [clientId, projects]);

    const handleRatingChange = (newRating, type) => {
        if (type === 'hover') {
            setHoverRating(newRating);
        } else {
            setRating(newRating);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!clientId || !projectId || rating === 0 || !reviewText.trim()) {
            alert('Please select a client, a project, give a rating, and write your review.');
            return;
        }

        setIsSubmitting(true);
        const selectedClient = clients.find(c => c.id === clientId);
        const selectedProject = projects.find(p => p.id === projectId);

        onSubmit({
            clientId,
            clientName: selectedClient ? selectedClient.name : 'Unknown Client',
            projectId,
            projectName: selectedProject ? selectedProject.name : 'Unknown Project',
            rating,
            title,
            text: reviewText,
            reviewer: 'You (Talent)', // The talent is the reviewer here
        });

        // Reset form
        setClientId('');
        setProjectId('');
        setRating(0);
        setHoverRating(0);
        setTitle('');
        setReviewText('');
        setIsSubmitting(false);
    };

    return (
        <div className="rounded-xl p-4 sm:p-6 border border-border bg-card shadow-lg animate-fade-in space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Submit Your Review for a Client</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Client Selection */}
                <div>
                    <label htmlFor="client-select-talent-form" className="block text-base font-medium mb-2 text-foreground">
                        Select Client <span className="text-destructive">*</span>
                    </label>
                    <select
                        id="client-select-talent-form"
                        value={clientId}
                        onChange={(e) => {
                            setClientId(e.target.value);
                            setProjectId(''); // Reset project when client changes
                        }}
                        className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        required
                    >
                        <option value="" disabled className="bg-background text-muted-foreground">Select a client</option>
                        {clients.map(client => (
                            <option key={client.id} value={client.id} className="bg-background text-foreground">
                                {client.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Project Selection */}
                <div>
                    <label htmlFor="project-select-talent-form" className="block text-base font-medium mb-2 text-foreground">
                        Select Project <span className="text-destructive">*</span>
                    </label>
                    <select
                        id="project-select-talent-form"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        required
                        disabled={!clientId || clientProjects.length === 0}
                    >
                        <option value="" disabled className="bg-background text-muted-foreground">Select a project for this client</option>
                        {clientProjects.length === 0 && clientId && (
                            <option disabled>No projects found for this client.</option>
                        )}
                        {clientProjects.map(project => (
                            <option key={project.id} value={project.id} className="bg-background text-foreground">
                                {project.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Rating Input */}
                <div>
                    <label className="block text-base font-medium mb-2 text-foreground">
                        Your Rating for this Client <span className="text-destructive">*</span>
                    </label>
                    <div className="flex text-3xl">
                        <StarRating
                            rating={rating}
                            onRate={handleRatingChange}
                            hoverRating={hoverRating}
                        />
                    </div>
                    {rating === 0 && <p className="text-sm text-destructive mt-1">Please select a star rating.</p>}
                </div>

                {/* Review Title */}
                <div>
                    <label htmlFor="talent-review-title" className="block text-base font-medium mb-2 text-foreground">
                        Review Title (Optional)
                    </label>
                    <input
                        type="text"
                        id="talent-review-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Smooth collaboration on brand promotion!"
                        className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground placeholder-muted-foreground"
                        maxLength={100}
                    />
                </div>

                {/* Review Text Area */}
                <div>
                    <label htmlFor="talent-review-text" className="block text-base font-medium mb-2 text-foreground">
                        Your Review <span className="text-destructive">*</span>
                    </label>
                    <textarea
                        id="talent-review-text"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows="5"
                        placeholder="Share your detailed experience working with this client on this project..."
                        className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring resize-y bg-input border border-border text-foreground placeholder-muted-foreground"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all py-3 rounded-lg font-semibold text-primary-foreground shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Review for Client'}
                </button>
            </form>
        </div>
    );
};

// --- TalentReviewsOfClientsDisplay Component (Displays reviews given by the Talent to Clients) ---
const TalentReviewsOfClientsDisplay = ({ reviews, clients, projects }) => {
    const [selectedClientId, setSelectedClientId] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [filterRating, setFilterRating] = useState(0);
    const [sortBy, setSortBy] = useState('recent');

    const displayedReviews = useMemo(() => {
        let filtered = Array.isArray(reviews) ? [...reviews] : [];

        if (selectedClientId) {
            filtered = filtered.filter(review => review.clientId === selectedClientId);
        }
        if (selectedProjectId) {
            filtered = filtered.filter(review => review.projectId === selectedProjectId);
        }
        if (filterRating > 0) {
            filtered = filtered.filter(review => review.rating === filterRating);
        }

        switch (sortBy) {
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'recent':
            default:
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        return filtered;
    }, [reviews, selectedClientId, selectedProjectId, filterRating, sortBy]);

    const clientProjects = useMemo(() => {
        if (!selectedClientId) return [];
        return Array.isArray(projects) ? projects.filter(p => p.clientId === selectedClientId) : [];
    }, [selectedClientId, projects]);

    return (
        <div className="space-y-6">
            <div className="p-4 bg-muted rounded-lg border border-border shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="client-filter-talent-view" className="block text-sm font-medium mb-2 text-foreground">
                            Filter by Client:
                        </label>
                        <select
                            id="client-filter-talent-view"
                            value={selectedClientId}
                            onChange={(e) => {
                                setSelectedClientId(e.target.value);
                                setSelectedProjectId(''); // Reset project when client changes
                            }}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value="">All Clients</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>
                                    {client.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="project-filter-talent-view" className="block text-sm font-medium mb-2 text-foreground">
                            Filter by Project:
                        </label>
                        <select
                            id="project-filter-talent-view"
                            value={selectedProjectId}
                            onChange={(e) => setSelectedProjectId(e.target.value)}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                            disabled={!selectedClientId}
                        >
                            <option value="">All Projects</option>
                            {clientProjects.map(project => (
                                <option key={project.id} value={project.id}>
                                    {project.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="rating-filter-talent-view" className="block text-sm font-medium mb-2 text-foreground">
                            Filter by Rating:
                        </label>
                        <select
                            id="rating-filter-talent-view"
                            value={filterRating}
                            onChange={(e) => setFilterRating(parseInt(e.target.value))}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value={0}>All Ratings</option>
                            <option value={5}>5 Stars</option>
                            <option value={4}>4 Stars</option>
                            <option value={3}>3 Stars</option>
                            <option value={2}>2 Stars</option>
                            <option value={1}>1 Star</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="sort-by-talent-view" className="block text-sm font-medium mb-2 text-foreground">
                            Sort By:
                        </label>
                        <select
                            id="sort-by-talent-view"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>
                </div>
            </div>

            {displayedReviews.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                    No reviews found matching your criteria.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedReviews.map(review => (
                        <div
                            key={review.id}
                            className="p-5 rounded-lg shadow-md bg-background border border-border text-left animate-fade-in"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg text-foreground">{review.title}</h3>
                                <StarRating rating={review.rating} size="text-xl" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                For {review.clientName} on Project: {review.projectName} - {new Date(review.date).toISOString().slice(0, 10)}
                            </p>
                            <p className="text-base text-card-foreground">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


// --- Main ClientReviewsAndRatings Component ---
export default function ClientReviewsAndRatings() {
    // --- State for Data ---
    const clients = useMemo(() => [
        { id: 'client1', name: 'Acme Corp.' },
        { id: 'client2', name: 'Global Innovations' },
        { id: 'client3', name: 'Startup Solutions' },
        { id: 'client4', name: 'Creative Minds Agency' },
    ], []);

    const projects = useMemo(() => [
        { id: 'proj1', clientId: 'client1', name: 'Reel Creation for Summer Campaign' },
        { id: 'proj2', clientId: 'client1', name: 'Social Media Ad Design' },
        { id: 'proj3', clientId: 'client2', name: 'Brand Promotion Video' },
        { id: 'proj4', clientId: 'client3', name: 'Logo Animation' },
        { id: 'proj5', clientId: 'client4', name: 'Website Banner Design' },
    ], []); // Simulate projects, ideally fetched from an API

    // Reviews given *by Clients to Talent*
    const [talentReviews, setTalentReviews] = useState([
        {
            id: 1,
            clientId: 'client1',
            projectId: 'proj1', // Associate review with a project
            reviewer: 'John Doe',
            rating: 5,
            title: 'Excellent Collaboration on Reel!',
            text: 'Great experience working with Talent on the summer campaign reel. Highly recommended!',
            date: '2024-06-01',
        },
        {
            id: 2,
            clientId: 'client2',
            projectId: 'proj3', // Associate review with a project
            reviewer: 'Jane Smith',
            rating: 4,
            title: 'Good Communication on Brand Promo',
            text: 'Talent was responsive and clear in their requirements for the brand promotion video.',
            date: '2024-05-20',
        },
        {
            id: 3,
            clientId: 'client1',
            projectId: 'proj2',
            reviewer: 'Alice Johnson',
            rating: 5,
            title: 'Top-notch ad design!',
            text: 'The social media ad designs were outstanding and delivered quickly.',
            date: '2024-05-25',
        },
    ]);

    // Reviews given *by Talent to Clients*
    const [clientReviewsByTalent, setClientReviewsByTalent] = useState([
        {
            id: 101,
            clientId: 'client1',
            projectId: 'proj1',
            reviewer: 'You (Talent)', // Indicates it's a review by the talent
            rating: 5,
            title: 'Fantastic Client for Reel Project',
            text: 'Acme Corp. provided clear briefs and prompt feedback for the reel creation. A pleasure to work with!',
            date: '2024-06-02',
        },
        {
            id: 102,
            clientId: 'client2',
            projectId: 'proj3',
            reviewer: 'You (Talent)',
            rating: 4,
            title: 'Professional and Organized',
            text: 'Global Innovations was very professional throughout the brand promotion project. Minor delays in content but overall good.',
            date: '2024-05-22',
        },
    ]);

    // State to manage which section is active
    const [activeSection, setActiveSection] = useState('talentReviews'); // 'talentReviews' or 'submitClientReview' or 'talentReviewsOfClients'

    // Handler for new review submission *by the talent about a client*
    const handleAddClientReviewByTalent = (review) => {
        setClientReviewsByTalent(prev => [
            {
                ...review,
                id: prev.length + 1,
                date: new Date().toISOString(),
            },
            ...prev
        ]);
        alert('Your review has been submitted!');
        setActiveSection('talentReviewsOfClients'); // Switch to view your reviews after submission
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6">Manage Your Reviews</h1>

            {/* Main Navigation/Toggle Buttons */}
            <div className="flex flex-wrap justify-start gap-4 mb-8">
                <button
                    className={`px-6 py-2 rounded-none font-medium text-base transition-colors duration-200 border border-border bg-background text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50
                        ${activeSection === 'talentReviews' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                    onClick={() => setActiveSection('talentReviews')}
                >
                    Client Reviews of You
                </button>
                <button
                    className={`px-6 py-2 rounded-none font-medium text-base transition-colors duration-200 border border-border bg-background text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50
                        ${activeSection === 'submitClientReview' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                    onClick={() => setActiveSection('submitClientReview')}
                >
                    Submit Review for Client
                </button>
                <button
                    className={`px-6 py-2 rounded-none font-medium text-base transition-colors duration-200 border border-border bg-background text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50
                        ${activeSection === 'talentReviewsOfClients' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                    onClick={() => setActiveSection('talentReviewsOfClients')}
                >
                    Your Reviews of Clients
                </button>
            </div>

            {/* Main Content Area */}
            <div className="rounded-none p-6 sm:p-8 border border-border bg-card animate-fade-in min-h-[500px]">
                {activeSection === 'talentReviews' && (
                    <>
                        <h2 className="text-2xl font-semibold text-foreground mb-6">Client Reviews About Your Work</h2>
                        <TalentReviewsDisplay
                            reviews={talentReviews}
                            clients={clients}
                        />
                    </>
                )}

                {activeSection === 'submitClientReview' && (
                    <>
                        <SubmitTalentReviewForm
                            clients={clients}
                            projects={projects}
                            onSubmit={handleAddClientReviewByTalent}
                        />
                    </>
                )}

                {activeSection === 'talentReviewsOfClients' && (
                    <>
                        <h2 className="text-2xl font-semibold text-foreground mb-6">Your Reviews Given to Clients</h2>
                        <TalentReviewsOfClientsDisplay
                            reviews={clientReviewsByTalent}
                            clients={clients}
                            projects={projects}
                        />
                    </>
                )}
            </div>
        </div>
    );
}