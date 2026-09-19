import { useMemo, useState } from 'react'
import './Products.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'
import ProductCard from '../components/products/ProductCard.jsx'
import { products, CATEGORY_FILTERS, APPLICATION_FILTERS } from '../data/products.js'

export default function Products() {
  usePageMeta(
    'Products | Oracle Machine Tech',
    'Oracle Machine Tech Products - CNC & Fiber Laser Cutting Machines'
  )

  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [applications, setApplications] = useState([])

  const toggle = (setFn, value) => {
    setFn((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    const term = search.toLowerCase()
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(term) || p.shortDescription.toLowerCase().includes(term)
      const matchesCategory = categories.length === 0 || categories.includes(p.category)
      const matchesApplication = applications.length === 0 || applications.includes(p.application)
      return matchesSearch && matchesCategory && matchesApplication
    })
  }, [search, categories, applications])

  const resetFilters = () => {
    setSearch('')
    setCategories([])
    setApplications([])
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>
            Precision engineering meets advanced technology. Explore our comprehensive range of manufacturing
            solutions.
          </p>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-lg-8 col-md-6">
              <label className="form-label" htmlFor="searchInput">Search Products</label>
              <input
                id="searchInput"
                className="search-input w-100"
                placeholder="Search by product name or specifications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>
                <i className="fas fa-redo" /> Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="products-container">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-lg-3">
              <Reveal as="div" className="filter-section">
                <h5 className="filter-title">Category</h5>
                <div className="filter-group">
                  {CATEGORY_FILTERS.map((f) => (
                    <label key={f.value}>
                      <input
                        type="checkbox"
                        checked={categories.includes(f.value)}
                        onChange={() => toggle(setCategories, f.value)}
                      />
                      {f.label}
                    </label>
                  ))}
                </div>
              </Reveal>
              <Reveal as="div" className="filter-section" delay={0.1}>
                <h5 className="filter-title">Application</h5>
                <div className="filter-group">
                  {APPLICATION_FILTERS.map((f) => (
                    <label key={f.value}>
                      <input
                        type="checkbox"
                        checked={applications.includes(f.value)}
                        onChange={() => toggle(setApplications, f.value)}
                      />
                      {f.label}
                    </label>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="col-lg-9">
              {filtered.length === 0 ? (
                <div className="empty-state">
                  <i className="fas fa-search" />
                  <h4>No Products Found</h4>
                  <p>Try adjusting your filters or search terms</p>
                </div>
              ) : (
                <div className="row g-4">
                  {filtered.map((p, i) => (
                    <ProductCard product={p} key={p.id} delay={i * 0.05} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
